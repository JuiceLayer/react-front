import { FC } from 'react';

//style
import * as S from './Destination.style';

//interface
import { IDestination } from "./IDestination"


const Destinaton: FC<IDestination> = ( {CityName, CityID} ) => {

    //TODO call api with city id to get the data insted of this hardcoded shit
    const measureTemperture = 50
    const feltTemperture = 48
    const humidity = "14%"
    const weatherImg = feltTemperture <= 20 
                        ? "cold" 
                        : feltTemperture > 30
                            ? "hot" 
                            : "middle"

    return (
        <S.Container>
            <S.Header>
                <S.City>{CityName}</S.City>
                <img src="./Images/Sun.png" />
                {/* TODO calc picture from temperture and MAKE IT WORK?!?!*/}
            </S.Header>
            <S.WeatherDescription>תאור מזג אוויר</S.WeatherDescription>
            <S.Data>
                {
                    //TODO get the categorys and their value from a js file
                }
                <S.DataBlock>
                    <S.DataCategory>
                        טמפ' נמדדת
                    </S.DataCategory>
                    <S.DataValue>
                        {measureTemperture}°C
                    </S.DataValue>
                </S.DataBlock>

                
                <S.DataBlock>
                    <S.DataCategory>
                        טמפ' מורגשת
                    </S.DataCategory>
                    <S.DataValue>
                        {feltTemperture}°C
                    </S.DataValue>
                </S.DataBlock>

                
                <S.DataBlock>
                    <S.DataCategory>
                        לחות
                    </S.DataCategory>
                    <S.DataValue>
                        {humidity}
                    </S.DataValue>
                </S.DataBlock>
            </S.Data>
        </S.Container>
    );
};

export default Destinaton;
