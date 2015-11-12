export function initialize(container, application) {
  application.inject('route', 'integration', 'service:integration');
  application.inject('service:integration', 'adapter', 'adapter:application');
}

export default {
  name: 'integration',
  initialize: initialize
};
