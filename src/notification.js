import Vue from 'vue'
import Notifications from './Notifications.vue'

const NotificationsConstructor = Vue.extend(Notifications);

Vue.use({
  install($vm, options) {
    const $instance = new NotificationsConstructor({
      el: document.createElement('div'),
      beforeDestroy() {
        document.body.removeChild(this.$el)
      }
    });

    document.body.appendChild($instance.$el);

    $vm.prototype.$notify = {
      /**
       *
       * @type {String} message
       * @type {Object} [config]
       * @type {Number} [config.title]
       * @type {Number} [config.color]
       * @type {Number} [config.duration]
       * @type {function} [config.onClick]
       * @type {function} [config.onClose]
       */
      add(message, config = {}) {
        $instance.add({
          message,
          ...config
        });
      }
    };
  }
});
