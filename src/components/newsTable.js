import React from 'react';
import * as moment from 'moment';
import { Link, Table, TableBody, TableCell, TableRow } from '@material-ui/core/';
import { getDomain, getColor } from '../functions/helper'

const NewsTable = ({ newsList, handlePagination, handleVote, hideCurrentNews }) => (
  <Table aria-label="news list table" className="newsList">
    <caption><span onClick={handlePagination} className='pointer'>More</span></caption>
    <TableBody>
      <TableRow className="emptyTableRow"></TableRow>
      {newsList.length ? newsList.map(row => (
        <TableRow key={row.objectID}>
          <TableCell size='small' align="center"><b>{row.num_comments ? row.num_comments : 0}</b></TableCell>
          <TableCell size='small' className='noPadding' width={1}><b>{row.points}</b></TableCell>
          <TableCell size='small' className='noPadding' width={1}><i className={`material-icons ${getColor(row.num_comments)} pointer`} onClick={() => handleVote(row)}>{row.isVoted ? 'arrow_drop_down' : 'arrow_drop_up'}</i></TableCell>
          <TableCell size='small' className='noPadding'>
            <Link href={row.url ? row.url : '/' } className="title">{row.title ? row.title+" " : 'No Title Available '}</Link>
            <span className="grey fs10px">({getDomain(row.url)})</span>
            <span className="grey fs10px"> by</span>
            <b className="fs10px"> {row.author} </b>
            <span className="grey fs10px">{moment(row.created_at).fromNow()}</span>
            <span className="fs10px pointer" onClick={() => hideCurrentNews(row)}> [ <b>hide</b> ]</span>
          </TableCell>
        </TableRow>
      )) : [...Array(20).keys()].map(value => (
      	<TableRow key={value} height={20}>
          <TableCell></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default NewsTable