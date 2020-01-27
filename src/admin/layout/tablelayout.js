import React from "react";
import MaterialTable from "material-table";
import { Container } from "@material-ui/core";

export function Tablelayout({ columns, rows, deletefunction, title }) {
	return (
		<div>
			<Container maxWidth="md" style={{ marginBottom: 20 }}>
				<MaterialTable
					title={title}
					columns={columns}
					data={rows}
					editable={{
						onRowDelete: oldData =>
							new Promise(resolve => {
								setTimeout(() => {
									resolve();
									//const data = [...rows];
									//data.splice(data.indexOf(oldData), 1);
									deletefunction(oldData.id);
								}, 600);
							})
					}}
				/>
			</Container>
		</div>
	);
}
