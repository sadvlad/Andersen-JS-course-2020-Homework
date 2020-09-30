function Grid(width, height, border) {
  this.width = width;
  this.height = height;
  this.border = border;
}
Grid.prototype.gridConfig = function() {
  return `Ширина = ${this.width}, высота = ${this.height}`;
}
Grid.prototype.getWidth = function() {
  return this.width;
}
Grid.prototype.getHeight = function() {
  return this.height;
}
Grid.prototype.addAndGetBorder = function() {
  this.border = true;
  return this.border;
}

function TableUser(width, height, tableString, tableColumn, border) {
  this.width = width;
  this.height = height;
  this.border = border;
  this.tableString = tableString;
  this.tableColumn = tableColumn;
}
TableUser.prototype.addName = function() {
  this.name = 'Таблица пользователя';
  return this.name;
}
TableUser.prototype.getTableString = function() {
  return this.tableString;
}
TableUser.prototype.getTableColumn = function() {
  return this.tableColumn;
}

function TableViewOrders(width, height, tableString, tableColumn, borderColor, border) {
  this.width = width;
  this.height = height;
  this.border = border;
  this.tableString = tableString;
  this.tableColumn = tableColumn;
  this.borderColor = borderColor;
  this.column = [{
      id: 1,
      isCheckbox: false
    },
    {
      id: 2,
      isCheckbox: false
    },
    {
      id: 3,
      isCheckbox: true
    }
  ]
}
TableViewOrders.prototype.addAndGetBorder = function() {
  this.border = true;
  return `Цвет границы ${this.borderColor}`;
}
TableViewOrders.prototype.getColumn = function() {
  return this.column;
}
TableViewOrders.prototype.addName = function() {
  this.name = 'Таблица просмотра ордеров';
  return this.name;
}

TableUser.prototype = Object.create(Grid.prototype);
TableViewOrders.prototype = Object.create(Grid.prototype);

TableUser.prototype.gridConfig = function() {
  this.area = this.width * this.height;
  return `${Grid.prototype.gridConfig.call(this)} площадь = ${this.area}px`;
}
TableViewOrders.prototype.gridConfig = function() {
  this.area = this.width * this.height;
  return `площадь = ${this.area}px`;
}

const grid = new Grid(500, 1000, false);
const tableUser = new TableUser(300, 600, 2, 2, false);
const tableViewOrders = new TableViewOrders(450, 650, 5, 3, 'green', false);