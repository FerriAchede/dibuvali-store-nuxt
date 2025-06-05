<script setup>
import { useMessageStore } from "~/stores/messagesStore";

const messageStore = useMessageStore();

const getIconName = (type) => {
    switch (type) {
        case "add":
            return "mingcute:shopping-cart-2-fill";
        case "delete":
        case "deleteAll":
            return "mingcute:delete-fill";
        case "update":
            return "mingcute:refresh-2-fill";
        case "error":
            return "mingcute:close-circle-fill";
        case "info":
            return "mingcute:information-fill";
        default:
            return "mingcute:confused-fill";
    }
};

const getIconColor = (type) => {
    switch (type) {
        case "add":
            return "#823BFB";
        case "delete":
            return "#FF6A9B";
        case "deleteAll":
            return "#FF6A9B";
        case "update":
            return "#2AFFF7";
        case "error":
            return "#F44336";
        case "info":
            return "#02CACD";
        default:
            return "#823BFB";
    }
};

const getTitle = (type) => {
    switch (type) {
        case "add":
            return "¡Añadido al carrito!";
        case "delete":
            return "¡Producto eliminado!";
        case "deleteAll":
            return "¡Carrito vaciado!";
        case "update":
            return "¡Carrito actualizado!";
        case "error":
            return "Error";
        case "info":
            return "Información";
        default:
            return "Aviso";
    }
};
</script>

<template>
    <div class="fixed top-4 right-4 space-y-2 z-999 pointer-events-none">
        <transition-group name="message" tag="div">
            <div
                v-for="msg in messageStore.allMessages"
                :key="msg.id"
                class="card pointer-events-auto">
                <div class="card-wrapper">
                    <div class="card-icon">
                        <div class="icon-cart-box">
                            <Icon
                                :name="getIconName(msg.type)"
                                class="icon"
                                :style="{ color: getIconColor(msg.type) }"
                            />
                        </div>
                    </div>

                    <div class="card-content">
                        <div class="card-title-wrapper">
                            <span class="card-title">{{ getTitle(msg.type) }}</span>
                            <span class="card-action" @click="messageStore.removeMessage(msg.id)">
                                <Icon name="mingcute:close-line" />
                            </span>
                        </div>

                        <div class="product-name">{{ msg.text }}</div>

                        <div class="product-price" v-if="msg.type === 'add' || msg.type === 'update'">
                            <span
                                v-if="
                                    msg.data?.previousQuantity &&
                                    msg.data?.previousQuantity !== msg.data?.newQuantity
                                "
                            >
                                <strong>{{ msg.data.previousQuantity }}</strong>
                                →
                                <strong>{{ msg.data.newQuantity }}</strong>
                            </span>
                            <span>
                                {{ msg.data?.price }} {{ msg.data?.currency_code }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<style scoped>
.message-enter-active,
.message-leave-active {
    transition: all 0.3s ease;
}
.message-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}
.message-enter-to {
    opacity: 1;
    transform: translateY(0);
}
.message-leave-from {
    opacity: 1;
    transform: translateY(0);
}
.message-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.card {
    width: 360px;
    height: auto;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1);
    margin: 1rem auto;
    padding: 0 10px 20px;
    backdrop-filter: blur(10px);
    z-index: 1000;
}

.card-wrapper {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
}

.card-icon {
    width: 20%;
}

.card-icon .icon-cart-box {
    background-color: #1a1a1a2f;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-content {
    width: 80%;
}

.card-title-wrapper {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: baseline;
    width: 100%;
}

.card-title {
    width: 95%;
    font-size: 1em;
    font-weight: 600;
    color: #1b1b1b;
    padding: 20px 0 0 10px;
}

.card-action {
    width: 5%;
    text-align: right;
    padding: 0 30px;
}

.product-name {
    font-size: 0.8em;
    color: #2c2c2c;
    padding: 10px 0 0 10px;
}

.product-name:hover {
    cursor: pointer;
    text-decoration: underline;
}

.product-price {
    font-size: 0.9em;
    font-weight: 600;
    color: #333;
    padding: 0 0 0 10px;
}

.icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
}
</style>
