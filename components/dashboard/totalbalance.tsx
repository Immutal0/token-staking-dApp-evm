import React, { useState, useEffect } from "react"


const TotalBalance: React.FC = () => {
	const [totalBalance, setTotalBalance] = useState<number>(235343287);
	return (
		<div className="bg-[#876876] border-2 border-black">
			<div>
				<p className="font-bold text-[2em]">
					TotalBalance
				</p>
			</div>
			<div>
				<p>{totalBalance} $Saint</p>
			</div>
		</div>
	)
}

export default TotalBalance;