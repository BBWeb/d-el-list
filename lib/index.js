var _ = require('lodash');

module.exports = MaintainEl;

function MaintainEl() {
  this.list = [];
  this.map = {};

  this.create = function create($el, key) {
    this.list.push($el);
    if(typeof key !== undefined) this.map[key] = $el;
  }.bind(this);

  this.destroy = function destroy($el, key) {
    _.remove(this.list, $el);
    if(typeof key !== undefined) delete this.map[key];
  }.bind(this);
}
