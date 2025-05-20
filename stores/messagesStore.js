import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", {
    state: () => ({
        messages: [],
    }),

    getters: {
        allMessages: (state) => state.messages,
    },

    actions: {
        addMessage({ text, type = "info", data, timeout = 5000 }) {
            const id = Date.now() + Math.random();
            this.messages.push({ id, text, data, type });
            if (timeout > 0) {
                setTimeout(() => {
                    this.removeMessage(id);
                }, timeout);
            }
            return id;
        },

        removeMessage(id) {
            this.messages = this.messages.filter((msg) => msg.id !== id);
        },

        clearMessages() {
            this.messages = [];
        },
    },
});
