class Grid {
  constructor(width, height, border) {
    this.width = width;
    this.height = height;
    this.border = border;
  }
  gridConfig() {
    return `Ширина = ${this.width}, высота = ${this.height}`;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  addAndGetBorder() {
    this.border = true;
    return this.border;
  }
}

class TableUser extends Grid {
  constructor(width, height, tableString, tableColumn, border) {
    super(width, height, border);
    this.tableString = tableString;
    this.tableColumn = tableColumn;
  }
  addName() {
    this.name = 'Таблица пользователя';
    return this.name;
  }
  getTableString() {
    return this.tableString;
  }
  getTableColumn() {
    return this.tableColumn;
  }
  gridConfig() {
    super.gridConfig;
    this.area = this.width * this.height;
    return `${super.gridConfig()} площадь = ${this.area}px`;
  }
}

class TableViewOrders extends Grid {
  constructor(width, height, tableString, tableColumn, borderColor, border) {
    super(width, height, border, tableString, tableColumn)
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
  addAndGetBorder() {
    this.border = true;
    return `Цвет границы ${this.borderColor}`;
  }
  gridConfig() {
    this.area = this.width * this.height;
    return `площадь = ${this.area}px`;
  }
  getColumn() {
    return this.column;
  }
  addName() {
    this.name = 'Таблица просмотра ордеров';
    return this.name;
  }
}

const grid = new Grid(500, 1000, false);
const tableUser = new TableUser(300, 600, 2, 2, false);
const tableViewOrders = new TableViewOrders(450, 650, 5, 3, 'green', false);