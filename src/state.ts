interface formulario {
    nombre: string,
    email?: string,
    comida?: string,
    juego?: string
}

const state = {
    data: {
        nombre: "",

    },
    listeners: [],
    getState() {
        return this.data
    },
    setState(newState: formulario) {
        if (this.data.nombre === "") {
            this.data.nombre = newState
        } else {
            this.data = newState
        }
    },
    subscribe(callback: () => any) {
        this.listeners.push(callback)
    }
}

export { state  }