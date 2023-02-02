import { query } from "express"

export const QueryParamsHandle = (req, default_attr) => {
	const attr = (req.query.attributes) ? req.query.attributes.trim() : default_attr.trim()
	const query_params = {
		sortkey: [req.query.sortkey || 'id'],
		limit: Number(req.query.limit) || 10000000,
		attributes: attr.split(',').map(str => str.trim())
	}
	query_params.sortkey.push(req.query.sortdir || 'ASC')
	return query_params
}