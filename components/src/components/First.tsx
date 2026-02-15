type Props = {title: string; text: string}

function First({title, text}: Props){
    return (
        <section>
            <h2>{title}</h2>
            <p>{text}</p>
        </section>

    )

}

export default First