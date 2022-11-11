import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'La mejor seguridad',
		description: 'Ofrecemos la una seguridad de datos optima, la cual nos hace marcar la diferencia',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Facilidad de uso',
		description: 'Nuestro sistema es facil de utilizar e integrar',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Mantenimiento',
		description: 'Nuestro código está escrito con los más altos estándares, lo que lo hace altamente sostenible.',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Soporte 24/7',
		description: 'Nuestro equipo está disponible en todo momento por si nos necesitas',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Precio',
		description: 'Ofrecemos la mejor relación costo/beneficio',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Scalable',
		description:
			'Nuestros servidores están ubicados en todo el mundo, mejorando así la escalabilidad y la velocidad. ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
