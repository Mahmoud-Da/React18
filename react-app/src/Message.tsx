// PascalCasing
function Message(){
    // JSX: Javascripts XML (change under the hood to Javascripts code)
    // TSX: TypeScript XML
    const name:string = "Moody";
    if (name)
      return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;
