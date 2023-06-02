const User:React.FC<any> = (props) => {
    return (
        
        <div>
            <h1>User component</h1>
          {props.children}

        </div>
    )
}

export default User;