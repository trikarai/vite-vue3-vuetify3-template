import { defineStore } from "pinia";

export const useModal = defineStore("Modal", {
  state: () => ({
    overlay: false,
    loadingPost: false,

    // success / error dialog
    status_code: 500,
    success: false,
    successTitle: "Berhasil",
    successMessage: "",

    error: false,
    errorType: "string",
    errorTitle: "Gagal",
    errorMessage: "",
    errorMessages: [],
  }),

  actions: {
    SET_ERROR(payload) {
      this.error = true;
      this.status_code = payload?.status_code;
      this.errorType = payload?.error_type;
      this.errorMessage = payload?.message;
      this.errorMessages = payload?.error_messages;
    },
    SET_SUCCESS(payload) {
      this.success = true;
      this.successTitle = payload.title;
      this.successMessage = payload.message;
    },
  },
});
