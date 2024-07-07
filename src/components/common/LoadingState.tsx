import SpinnerLoader from './Spinner'

const LoadingState = ({ label }: { label: string }) => (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="text-red-500 text-sm">
            <SpinnerLoader label={label} />
        </div>
    </div>
)
export default LoadingState
