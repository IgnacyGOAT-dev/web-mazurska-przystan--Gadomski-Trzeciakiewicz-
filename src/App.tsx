import './App.css'
import {useState} from "react";

function App() {
    const [name, setName] = useState<string>("to jest default")
    const [boat, setBoat] = useState()
    const [hour, setHour] = useState()

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
        console.log(name);
    }

  return (
    <>
        <div>
            <form>
            <p>Podaj Imię:</p>
            <input type={'text'} name={'clientName'} onChange={handleNameChange}/>
            <p>Wybierz swoją łódź:</p>
            <select name={'boat'}>
                <option>Kajak (20zł/h)</option>
                <option>Rower wodny (35zł/h)</option>
                <option>OMEGA (150zł/h)</option>
            </select>
            <p>Wybierz godziny wynajmu:</p>
            <input type={'range'} max={8} min={1} name={'leaseTime'}/>
            <p/>
            <input type={'checkbox'} name={'kapokCheck'}/> Kapok dla dziecka (5zł jednorazowo)
            <input type={'checkbox'} name={'inCheck'}/> opieka instuktora (50zł za godzinę)
            <br/>
            Wybierz płatność:
            <input type={'radio'} name={'payment'} value={'card'}/> Karta
            <input type={'radio'} name={'payment'} value={'blik'}/> Blik
            <p/>
            <button type='submit' name={'submit'}>Sprzedaj nam swe życie</button>
            </form>
        </div>

    </>
  )
}

export default App
