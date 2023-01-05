// step1
import WaitingStep1 from '../img/S010A.png';
import DoneStep1 from '../img/S012A.png';
import DoneStep1Red from '../img/S012B.png';
import DoneStep1Green from '../img/S012B_bak.png';
import onProgressStep1 from '../img/S011A.png';
import onProgress1Red from '../img/S011B.png';
import onProgress1Brown from '../img/S011B_bak.png';
// step 11
import WaitingStep11 from '../img/S110A.png';
import DoneStep11 from '../img/S112A.png'
import DoneStep11Red from '../img/S112B.png';
import DoneStep11Green from '../img/S112B_bak.png';
import onProgressStep11 from '../img/S111A.png';
import onProgress11Red from '../img/S111B.png';
import onProgress11Brown from '../img/S111B_bak.png';
import DiableProgress11 from '../img/S110X.png'

// general
import WaitingStep from '../img/S020A.png';
import DoneStep from '../img/S022A.png'
import DoneStepRed from '../img/S022B.png';
import DoneStepGreen from '../img/S022B_bak.png';
import onProgressStep from '../img/S012A.png';
import onProgressRed from '../img/S012B.png';
import onProgressBrown from '../img/S012B_bak.png';
import DiableProgress from '../img/S020X.png'




export function StageStep1(props) {
  const { status , alt  } = props
    switch (status) {
      case '0':
        return <img src={WaitingStep1} alt={alt} className='w-12 h-10'/>;
      case '1':
        return <img src={DoneStep1} alt={alt} className='w-12 h-10'/>;
      case '2':
        return <img src={DoneStep1Red} alt={alt} className='w-12 h-10'/>;
      case '3':
        return <img src={DoneStep1Green} alt={alt} className='w-12 h-10'/>;
      case '4':
        return <img src={onProgressStep1} alt={alt} className='w-12 h-10'/>;
      case '5':
        return <img src={onProgress1Red} alt={alt} className='w-12 h-10'/>;
      case '6':
        return <img src={onProgress1Brown} alt={alt} className='w-12 h-10'/>;
      default:
        return null;
  }
}
  
export function StageStep11(props) {
  const { status , alt  } = props
    switch (status) {
      case 0:
        return <img src={WaitingStep11} alt={alt} className='w-12 h-10'/>;
      case '1':
        return <img src={DoneStep11} alt={alt} className='w-12 h-10'/>;
      case '2':
        return <img src={DoneStep11Red} alt={alt} className='w-12 h-10'/>;
      case '3':
        return <img src={DoneStep11Green} alt={alt} className='w-12 h-10'/>;
      case '4':
        return <img src={onProgressStep11} alt={alt} className='w-12 h-10'/>;
      case '5':
        return <img src={onProgress11Red} alt={alt} className='w-12 h-10'/>;
      case '6':
        return <img src={onProgress11Brown} alt={alt} className='w-12 h-10'/>;
      case '7':
        return <img src={DiableProgress11} alt={alt} className='w-12 h-10'/>;
      default:
        return null;
  }
}

export function StageOnRail(props) {
  const { status , alt  } = props
    switch (status) {
      case '0':
        return <img src={WaitingStep} alt={alt} className='w-12 h-10'/>;
      case '1':
        return <img src={DoneStep} alt={alt} className='w-12 h-10'/>;
      case '2':
        return <img src={DoneStepRed} alt={alt} className='w-12 h-10'/>;
      case '3':
        return <img src={DoneStepGreen} alt={alt} className='w-12 h-10'/>;
      case '4':
        return <img src={onProgressStep} alt={alt} className='w-12 h-10'/>;
      case '5':
        return <img src={onProgressRed} alt={alt} className='w-12 h-10'/>;
      case '6':
        return <img src={onProgressBrown} alt={alt} className='w-12 h-10'/>;
      case '7':
        return <img src={DiableProgress} alt={alt} className='w-12 h-10'/>;
      default:
        return null;
  }
}