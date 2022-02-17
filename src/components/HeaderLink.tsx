import type { IconType } from 'react-icons';

interface HeaderLinkProps {
	Icon: IconType;
	text: string;
	avatar?: any;
	feed?: any;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
	Icon,
	text,
	avatar,
	feed,
}: HeaderLinkProps) => {
	return (
		<div
			className={`cursor-pointer flex flex-col justify-center items-center ${
				feed
					? 'text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white space-y-1'
					: 'text-gray-500 hover:text-gray-700'
			}`}
		>
			{avatar ? <Icon className="h-7 w-7" /> : <Icon className="h-7 w-7" />}
			<h4 className="text-sm">{text}</h4>
		</div>
	);
};

export default HeaderLink;
