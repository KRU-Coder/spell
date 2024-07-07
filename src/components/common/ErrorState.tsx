const ErrorState = ({ message }: { message: string }) => (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="text-red-500 text-sm">{message}</div>
    </div>
)
export default ErrorState
