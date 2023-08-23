import { useEffect, useState } from 'react'

function Relogio()
{
	const [relogio, setRelogio] = useState([
		{
			hora: 23,
			minuto:59,
			segundo: 50
		}
	])
	
	useEffect(() => {
		const interval = setInterval(relogioTick, 1000);
		return ()=> clearInterval (interval)
	})
	
	function relogioTick(){
	
		const temprelogio = [...relogio]
	
		if(relogio[0].segundo < 59)
		{
			temprelogio[0].segundo = temprelogio[0].segundo + 1;
			setRelogio(temprelogio)
		}
		else
		{
			temprelogio[0].segundo = 0;
			setRelogio(temprelogio)
			if (relogio[0].minuto < 59)
			{
				temprelogio[0].minuto = temprelogio[0].minuto + 1;
				setRelogio(temprelogio);
			}
			else
			{
				temprelogio[0].minuto = 0;
				setRelogio(temprelogio)
				if (relogio[0].hora < 23)
				{
					temprelogio[0].hora = temprelogio[0].hora + 1;
					setRelogio(temprelogio)
				}
				else
				{
					temprelogio[0].hora = 0;
					setRelogio(temprelogio)
				}
			}
		}
	}

	return <span>{relogio[0].hora}:{relogio[0].minuto}:{relogio[0].segundo}</span>

}

export default Relogio