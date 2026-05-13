function Message() {
    const allow = 12;
    const name = 'Pasha';
    if(allow===1)
        return <h1>Hello {name}</h1>

    return <h1>Hello World</h1>
}
export default Message;