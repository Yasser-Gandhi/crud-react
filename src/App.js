import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { text: "A1", id: "1" },
        { text: "B1", id: "2" }
      ],
      text: "",
      updateText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateChange = this.updateChange.bind(this);
  }

  render() {
    return (
      <div className="App">
        <h1>Formulario CRUD</h1>

        <form onSubmit={this.handleSubmit}>
          Nombre
          <input
            type="text"
            value={this.state.text}
            placeholder="Introduce tu nombre"
            onChange={this.handleChange}
          />
          <button type="submit" className="btn save-btn">
            Guardar
          </button>
        </form>

        <h1> Base de datos</h1>

        <table className="crud-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => (
              <tr key={item.id + index}>
                <td className={item.showHide ? "hidden" : ""}> {item.text} </td>
                <td className={item.showHide ? "" : "hidden"}>
                  <input
                    type="text"
                    onChange={this.updateChange}
                    defaultValue={item.text}
                  />
                </td>
                <td>
                  <button
                    className={item.showHide ? "hidden" : "btn save-btn"}
                    onClick={() => this.update(item)}
                  >
                   Actualizar
                  </button>
                  <button
                    className={item.showHide ? "btn save-btn" : "hidden"}
                    onClick={() => this.save(item)}
                  >
                    Guardar
                  </button>
                  <button
                    className="btn del-btn"
                    onClick={() => this.delete(item)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  delete(e) {
    this.state.items.splice(this.state.items.indexOf(e), 1);
    this.setState({ items: this.state.items });
  }
  updateChange(e) {
    this.setState({ updateText: e.target.value });
  }
  update(e) {
    e.showHide = true;
    this.setState(e);
  }
  save(e) {
    const updateItem = {
      text: this.state.updateText ? this.state.updateText : e.text,
      id: Date.now()
    };
    this.state.items.splice(this.state.items.indexOf(e), 1, updateItem);
    this.setState({ items: this.state.items });
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.state.items.unshift(newItem);
    this.setState({ items: this.state.items });
  }
}

export default App;
