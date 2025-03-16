export default function Copyright() {
    const year = new Date().getFullYear();

    return (
        <div className="text-center text-lg-start">
            Copyright &copy; {year} ArX Code. All Rights Reserved.
        </div>
    );
}
