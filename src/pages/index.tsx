export interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
    return (
        <div className="p-4 shadow rounded bg-white">
            <h1 className="text-purple-500 leading-normal">Starter kit</h1>
            <p className="text-gray-500">typescript nextjs  tailwindcss</p>
        </div>
    );
};

export default Index;
