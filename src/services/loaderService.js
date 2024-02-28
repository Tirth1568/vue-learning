import { reactive } from 'vue';

const state = reactive({
  isLoading: false
});

export default {
  // Method to show the loader
  showLoader() {
    state.isLoading = true;
  },

  // Method to hide the loader
  hideLoader() {
    state.isLoading = false;
  },

  // Method to check if the loader is currently shown
  isLoading() {
    return state.isLoading;
  }
};
