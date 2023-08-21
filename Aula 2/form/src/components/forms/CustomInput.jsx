/* eslint-disable react/prop-types */

function Custominput({children, id, type})
{
	return (
		<div style={{display: "flex", flexDirection: "column"}}>
		<label htmlFor={id}>{children}</label>
		<input id={id} type={type}></input>
		</div>
	)
}

export default Custominput