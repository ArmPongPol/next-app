import {GetServerSideProps} from "next";

interface Data {
    title: string;
    body: string;
}

interface SSRPageProps {
    data: Data;
}

const SSRPage= ({ data }: SSRPageProps) => {
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await res.json()

    return {
        props: {
            data: data
        }
    }
}

export default SSRPage;