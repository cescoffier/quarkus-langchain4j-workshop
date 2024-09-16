import {css, LitElement} from 'lit';
import '@vaadin/icon';
import '@vaadin/button';
import '@vaadin/text-field';
import '@vaadin/text-area';
import '@vaadin/form-layout';
import '@vaadin/progress-bar';
import '@vaadin/checkbox';
import '@vaadin/horizontal-layout';
import '@vaadin/grid';
import '@vaadin/grid/vaadin-grid-sort-column.js';

export class DemoChat extends LitElement {

    _stripHtml(html)   {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    }

    connectedCallback() {
        const chatBot = document.getElementsByTagName("chat-bot")[0];

        const socket = new WebSocket("ws://" + window.location.host + "/customer-support-agent");
        socket.onmessage = function (event) {
            chatBot.hideLastLoading();
            // LLM response
            chatBot.sendMessage(event.data, {
                right: false,
            });
        }

        const that = this;
        chatBot.addEventListener("sent", function (e) {
            if (e.detail.message.right === true) {
                // User message
                socket.send(that._stripHtml(e.detail.message.message));
                chatBot.sendMessage("", {
                    right: false,
                    loading: true
                });
            }
        });
    }


}

customElements.define('demo-chat', DemoChat);