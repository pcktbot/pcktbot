<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: 'default'
  }
});

const position = ref({ x: 0, y: 0 });
const isDragging = ref(false);
const dragOffset = ref({ x: 0, y: 0 });
const wrapperRef = ref<HTMLElement | null>(null);
const zIndex = ref(1);

onMounted(() => {
  const savedPosition = sessionStorage.getItem(`componentPosition-${props.id}`);
  if (savedPosition) {
    position.value = JSON.parse(savedPosition);
  }
  
  const savedZIndex = sessionStorage.getItem(`componentZIndex-${props.id}`);
  if (savedZIndex) {
    zIndex.value = parseInt(savedZIndex);
  }

  if (wrapperRef.value) {
    wrapperRef.value.style.transform = `translate(${position.value.x}px, ${position.value.y}px)`;
  }
});

onUnmounted(() => {
  savePosition();
  saveZIndex();
});


function bringToFront() {
  const allComponents = document.querySelectorAll('.control-group');
  let maxZIndex = 0;
  allComponents.forEach((component) => {
    const zIndex = parseInt(window.getComputedStyle(component).zIndex) || 0;
    maxZIndex = Math.max(maxZIndex, zIndex);
  });

  zIndex.value = maxZIndex + 1;
  if (wrapperRef.value) {
    wrapperRef.value.style.zIndex = String(zIndex.value);
  }

  saveZIndex();
}

function startDrag(event: MouseEvent) {
  event.preventDefault();

  bringToFront();

  isDragging.value = true;
  
  if (wrapperRef.value) {
    const rect = wrapperRef.value.getBoundingClientRect();
    dragOffset.value = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }
  
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('mouseup', stopDrag);
}

function onDrag(event: MouseEvent) {
  if (!isDragging.value) return;
  
  event.preventDefault();

  position.value = {
    x: event.clientX - dragOffset.value.x,
    y: event.clientY - dragOffset.value.y
  };
  
  if (wrapperRef.value) {
    wrapperRef.value.style.transform = `translate(${position.value.x}px, ${position.value.y}px)`;
  }
}

function stopDrag() {
  isDragging.value = false;
  window.removeEventListener('mousemove', onDrag);
  window.removeEventListener('mouseup', stopDrag);
  
  savePosition();
}

function savePosition() {
  sessionStorage.setItem(`componentPosition-${props.id}`, JSON.stringify(position.value));
}

function saveZIndex() {
  sessionStorage.setItem(`componentZIndex-${props.id}`, String(zIndex.value));
}

function handleClick() {
  if (isDragging.value) {
    bringToFront();
  }
}

</script>

<template>
  <div 
    ref="wrapperRef"
    class="control-group"
    :class="{ 'dragging': isDragging }"
    @mousedown="startDrag"
    @click="handleClick"
    :style="{ zIndex: zIndex }"
  >
    <div class="drag-handle"></div>
    <slot></slot>
  </div>
</template>

<style>
.control-group {
  width: 400px;
  height: 400px;
  border: 2px solid red;
  position: absolute;
  background-color: white;
}

.control-group.dragging {
  opacity: 0.8;
}

.drag-handle {
  cursor: move;
  user-select: none;
  height: 50px;
  width: 100%;
  background-color: red;
}
</style>
