import { query } from "express"

export const QueryParamsHandle = (req, default_attr) => {
	const attr = (req.query.attributes) ? req.query.attributes.trim() : default_attr.trim()
	const query_params = {
		sortkey: [req.query.sortkey || 'id'],
		limit: Number(req.query.limit) || 10000000,
		page: req.query.page || 1,
		size: req.query.size || 20,
		attributes: attr.split(',').map(str => str.trim())
	}
	query_params.sortkey.push(req.query.sortdir || 'ASC')
	return query_params
}

export const getPagination = (page, size) => {
	const limit = size ? +size : 3;
	const offset = page ? page * limit : 0;
   
	return { limit, offset };
   };
   
   export const getPagingData = (data, page, limit) => {
	const { count: totalItems, rows: items } = data;
   
	const currentPage = page ? +page : 0;
	const totalPages = Math.ceil(totalItems / limit);
   
	return { totalItems, items, totalPages, currentPage };
   };
   