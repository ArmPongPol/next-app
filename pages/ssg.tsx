import { GetStaticProps } from 'next';

interface Data {
    title: string;
    body: string;
}

interface SSGPageProps {
    data: Data;
}

const SSGPage = ({ data }: SSGPageProps) => {
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
};

// ฟังก์ชั่นที่ดึงข้อมูลจาก API เมื่อเว็บไซต์ถูกสร้าง
export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();

    return {
        props: {
            data,
        },
        revalidate: 10, // เมื่อเว็บไซต์ถูกสร้างแล้ว จะทำการรีเฟรชข้อมูลทุกๆ 10 วินาที
    };
};

export default SSGPage;
