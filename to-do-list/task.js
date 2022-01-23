const Task = (name, date, check) => {

    const getName = () => { return this.name; }
    const getDate = () => { return this.date; }
    const getCheck = () => { return this.check; }

    const setName = (name) => { this.name = name; }
    const setDate = (date) => { this.date = date; }
    const setCheck = () => { this.check = check; }

    return { getName, getDate, getCheck, setName, setDate, setCheck }
}

export default Task;