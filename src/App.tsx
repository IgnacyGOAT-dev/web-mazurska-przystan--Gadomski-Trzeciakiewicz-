import './App.css'
import {type ChangeEvent, type FormEvent, useState} from "react";

function App() {
    const [name, setName] = useState<string>("to jest default")
    const [boat, setBoat] = useState<string>()
    const [hour, setHour] = useState<number>(5)
    const [kapok, setKapok] = useState<boolean>(false)
    const [instructor, setInstructor] = useState<boolean>(false)
    const [payment, setPayment] = useState<string>()

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
        console.log(e.target.value);
    }

    function handleBoatChange(e: React.ChangeEvent<HTMLSelectElement>){
        setBoat(e.target.value);
        console.log(e.target.value)
    }

    function handleHourChange(e: React.ChangeEvent<HTMLInputElement>){
        setHour(e.target.valueAsNumber);
        console.log(e.target.value);

        return e.currentTarget.value;
    }

    function handleKapokChange(e: React.ChangeEvent<HTMLInputElement>) {
        setKapok(e.target.checked);
    }

    function handleInstructorChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInstructor(e.target.checked);
    }

    function handlePaymentChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPayment(e.target.value);
    }

    function calculatePrice(): number {
        let boatPricePerHour = 0;

        if (boat?.includes("Kajak")) boatPricePerHour = 20;
        else if (boat?.includes("Rower")) boatPricePerHour = 35;
        else if (boat?.includes("OMEGA")) boatPricePerHour = 150;

        let total = boatPricePerHour * hour;

        if (kapok) total += 5;
        if (instructor) total += 50 * hour;

        return total;
    }

  return (
    <>
        <div>
            <form>
            <p>Podaj Imię:</p>
            <input type={'text'} name={'clientName'} onChange={handleNameChange}/>
            <p>Wybierz swoją łódź:</p>
            <select name={'boat'} onChange={handleBoatChange}>
                <option>Kajak (20zł/h)</option>
                <option>Rower wodny (35zł/h)</option>
                <option>OMEGA (150zł/h)</option>
            </select>
            <p>Wybierz godziny wynajmu:</p>
            <p>{hour} godzin</p>
            <input type={'range'} max={8} min={1} defaultValue={hour} name={'leaseTime'} onChange={handleHourChange}/>
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
