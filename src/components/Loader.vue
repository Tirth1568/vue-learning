<template>
    <div class="loader-overlay">
      <div class="loader"></div>
    </div>
  </template>
  
  <script>
  export default {
    // Loader component logic
  };
  </script>
  
  <style scoped>
  .loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure the loader is on top of modals */
  }
  
  .loader {
    border: 8px solid rgba(255, 255, 255, 0.3); /* Adjust border color and width */
    border-radius: 50%;
    border-top: 8px solid #3498db;
    width: 80px; /* Adjust loader size */
    height: 80px; /* Adjust loader size */
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>

  