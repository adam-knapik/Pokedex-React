import { BsCircleFill, BsFillGearFill } from 'react-icons/bs';
import { FaDragon, FaGhost, FaWater } from 'react-icons/fa';
import { MdDarkMode, MdPsychology } from 'react-icons/md'
import { GiBroadsword,  GiElectric, GiFairyWings,  GiGrass, GiFeather, GiGroundSprout, GiIceCube, GiPoison, GiStoneStack } from 'react-icons/gi';
import { AiFillFire, AiFillBug } from 'react-icons/ai';

const PokemonTypesIcons = {
    normal: <BsCircleFill />,
    fire: <AiFillFire style={{color: 'orange'}}/>,
    fighting: <GiBroadsword  style={{color: 'red'}} />,
    water: <FaWater style={{color: 'steelblue'}} />,
    flying: <GiFeather />,
    grass: <GiGrass style={{color: 'green'}} />,
    poison: <GiPoison style={{color: 'purple'}} />,
    electric: <GiElectric style={{color: 'yellow'}} />,
    ground: <GiGroundSprout style={{color: 'saddlebrown'}} />,       
    psychic: <MdPsychology />,
    rock: <GiStoneStack style={{color: 'gray'}} />,
    ice: <GiIceCube style={{color: 'dodgerblue'}} />,
    bug: <AiFillBug style={{color: 'saddlebrown'}} />,
    dragon: <FaDragon style={{color: 'red'}}/>,
    ghost: <FaGhost style={{color: 'gray'}}/>,
    dark: <MdDarkMode style={{color: 'darkslategray '}}/>,
    steel: <BsFillGearFill darkslategray  />,
    fairy: <GiFairyWings style={{color: 'violet'}}/>,
};

export default PokemonTypesIcons;
