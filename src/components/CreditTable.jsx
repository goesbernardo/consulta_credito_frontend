import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CreditTable = ({ data }) => {
    if (!data) return null;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Número do Crédito</TableCell>
                        <TableCell>Número da NFS-e</TableCell>
                        <TableCell>Data da Constituição</TableCell>
                        <TableCell>Valor ISSQN</TableCell>
                        <TableCell>Tipo de Crédito</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{data.numeroCredito}</TableCell>
                        <TableCell>{data.numeroNfse}</TableCell>
                        <TableCell>{data.dataConstituicao}</TableCell>
                        <TableCell>{data.valorIssqn}</TableCell>
                        <TableCell>{data.tipoCredito}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CreditTable;
