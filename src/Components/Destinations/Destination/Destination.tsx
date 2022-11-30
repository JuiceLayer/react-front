import { FC } from 'react';

//style
import * as S from './Destination.style';

//interface
import { IDestination } from "./IDestination"

//icons and imgs
import sun from "./Images/Sun.png"
import cloud from "./Images/Cloud.png"
import snow from "./Images/Snow.png"

const Destinaton: FC<IDestination> = ( {cityName, measureTemperture, feltTemperture, humidity, weatherDescription} ) => {

    const blocks = [

        { category: "טמפ' נמדדת", value: measureTemperture + "°C"},
        { category: "טמפ' מורגשת", value: feltTemperture + "°C"},
        { category: "לחות", value: humidity + "%"}
    ]

    return (
        <S.Container>
            <S.Header>
                <S.City>{cityName}</S.City>
                <S.Icon src={  feltTemperture <= 20 
                        ? snow
                        : feltTemperture >= 30
                            ? sun 
                            : cloud} />
            </S.Header>
            <S.WeatherDescription>{weatherDescription}</S.WeatherDescription>
            <S.Data>
                
            {
                blocks.map(item => (
                    <S.DataBlock>
                    <S.DataCategory>
                        {item.category}
                    </S.DataCategory>
                    <S.DataValue>
                        {item.value}
                    </S.DataValue>
                </S.DataBlock>
                ))
            }
            </S.Data>
        </S.Container>
    );
};

export default Destinaton;
