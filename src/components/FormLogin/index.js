import RoundedButton from "../RoundedButton";

const FormLogin = ({inputs, submit}) => {
    const elInputs = inputs.map(input => (
        <div className="space-y-2" key={input.label}>
            <label className="text-sm font-medium text-gray-700 tracking-wide">{input.label}</label>
            <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue" type={input.type} placeholder={input.placeholder} onChange={e => input.setState(e.currentTarget.value)} />
        </div>
    ))

    return (
        <div className="space-y-5">
            {elInputs}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-dark focus:ring-blue border-gray-300 rounded" />
                    <label className="ml-2 block text-sm text-gray-800">
                        Remember me
                    </label>
                </div>
                <div className="text-sm">
                    <a href="" className="text-blue hover:text-blue-dark">
                        Forgot your password?
                    </a>
                </div>
            </div>
            <RoundedButton type="submit" compClass="w-36 py-2 text-sm" color="blue" onClick={() => submit()}>
                Sign in
            </RoundedButton>
        </div>
    )
}

export default FormLogin;