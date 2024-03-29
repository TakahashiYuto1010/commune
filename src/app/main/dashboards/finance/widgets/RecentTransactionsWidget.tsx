import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import format from 'date-fns/format';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import { Checkbox, IconButton } from '@mui/material';
import { useAppSelector } from 'app/store';
import { selectWidgets } from '../store/widgetsSlice';
import RecentTransactionsWidgetType from '../types/RecentTransactionsWidgetType';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Rating from '@mui/material/Rating';

/**
 * The RecentTransactionsWidget widget.
 */
function RecentTransactionsWidget() {
	const widgets = useAppSelector(selectWidgets);
	const { columns, rows } = widgets.recentTransactions as RecentTransactionsWidgetType;

	return (
		<Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
			<div className="table-responsive mt-24">
				<Table className="simple w-full min-w-full">
					<TableHead>
						<TableRow>
							<TableCell style={{width: "50px"}}>
							<Checkbox style={{marginLeft: "-8px"}}/>
							</TableCell>
							{columns.map((column, index) => (
								<TableCell key={index}>
									<Typography
										color="text.secondary"
										className="font-semibold text-12 whitespace-nowrap"
									>
										{column}
									</Typography>
								</TableCell>
							))}

							<TableCell>
								{/* <FuseSvgIcon className="text-white opacity-75">
								heroicons-outline:trash
								</FuseSvgIcon> */}
								<IconButton aria-label="Add photo">
									<FuseSvgIcon size={20}>heroicons-outline:trash</FuseSvgIcon>
								</IconButton>
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{rows.map((row, index) => (
							<TableRow key={index}>
								{Object.entries(row).map(([key, value]) => {
									switch (key) {
										case 'trash': {
											return (
												<TableCell 
													key={key}
													component="th"
													scope="row" 
												>
													<div style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
														<Rating name="customized-1" defaultValue={0} max={1} style={{marginLeft: "-100px", marginRight: "70px"}} />
														<IconButton aria-label="Add photo">
															<FuseSvgIcon size={20}>heroicons-outline:dots-horizontal</FuseSvgIcon>
														</IconButton>
													</div>
												</TableCell>
											);
										}
										case 'checkbox': {
											return (
												<TableCell
													key={key}
													component="th"
													scope="row" 
													style={{width: "50px"}}>
													<Checkbox />
												</TableCell>
											);
										}
										case 'id': {
											return (
												<TableCell
													key={key}
													component="th"
													scope="row"
												>
													<Typography color="text.secondary">{value}</Typography>
												</TableCell>
											);
										}
										case 'Name': {
											return (
												<TableCell
													key={key}
													component="th"
													scope="row"
												>
													<Typography>{value}</Typography>
												</TableCell>
											);
										}
										case 'Email': {
											return (
												<TableCell
													key={key}
													component="th"
													scope="row"
												>
													<Typography>
														{value}
													</Typography>
												</TableCell>
											);
										}
										case 'status': {
											return (
												<TableCell
													key={key}
													component="th"
													scope="row"
												>
													<Typography
														className={clsx(
															'inline-flex items-center font-bold text-10 px-10 py-2 rounded-full tracking-wide uppercase',
															value === 'pending' &&
																'bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-50',
															value === 'completed' &&
																'bg-green-50 text-green-800 dark:bg-green-600 dark:text-green-50'
														)}
														style={{height: "30px", width: "100px", display: "flex", justifyContent: "center"}}
													>
														{value}
													</Typography>
												</TableCell>
											);
										}
										default: {
											return (
												<TableCell
													key={key}
													component="th"
													scope="row"
												>
													<Typography>{value}</Typography>
												</TableCell>
											);
										}
									}
								})}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</Paper>
	);
}

export default memo(RecentTransactionsWidget);
