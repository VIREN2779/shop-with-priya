
export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-500 sm:flex-row">
                <span>Shop With Priya · v1.0.0</span>
                <span>Built for Shop With Priya © {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
}