import { BsCircleFill, BsFillGearFill } from 'react-icons/bs';
import { FaDragon, FaGhost, FaWater } from 'react-icons/fa';
import { MdDarkMode, MdPsychology } from 'react-icons/md'
import { GiBroadsword,  GiElectric, GiFairyWings,  GiGrass, GiFeather, GiGroundSprout, GiIceCube, GiPoison, GiStoneStack } from 'react-icons/gi';
import { AiFillFire, AiFillBug } from 'react-icons/ai';

const PokemonTypesIcons = {
    normal: <BsCircleFill />,
    fire: <AiFillFire />,
    fighting: <GiBroadsword />,
    water: <FaWater />,
    flying: <GiFeather />,
    grass: <GiGrass />,
    poison: <GiPoison />,
    electric: <GiElectric />,
    ground: <GiGroundSprout />,       
    psychic: <MdPsychology />,
    rock: <GiStoneStack />,
    ice: <GiIceCube />,
    bug: <AiFillBug />,
    dragon: <FaDragon />,
    ghost: <FaGhost />,
    dark: <MdDarkMode />,
    steel: <BsFillGearFill />,
    fairy: <GiFairyWings />,
};

export default PokemonTypesIcons;
