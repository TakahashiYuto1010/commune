import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useAppSelector } from 'app/store';
import { selectWidgets } from '../../../store/widgetsSlice';
import WidgetDataType from '../../../types/WidgetDataType';

/**
 * The OverdueWidget widget.
 */
function OverdueWidget() {
	const widgets = useAppSelector(selectWidgets);
	const { data, title } = widgets.overdue as WidgetDataType;

	return (
		<Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
			<Typography
				className="flex items-baseline justify-center w-full mt-20 mb-24"
				color="text.secondary"
			>
			</Typography>
			<div className="text-center mt-8">
				<Typography className="text-7xl sm:text-4xl font-bold tracking-tight leading-none text-red-500">
					{String(data.count)}+
				</Typography>
				<Typography className="text-lg font-medium text-red-600">{data.name}</Typography>
			</div>
			<Typography
				className="flex items-baseline justify-center w-full mt-20 mb-24"
				color="text.secondary"
			>
			</Typography>
		</Paper>
	);
}

export default memo(OverdueWidget);
