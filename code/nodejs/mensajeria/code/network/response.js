exports.success = function(req, res, message, status) {
    res.status(status || 200).send({ error:'', body:message })
}

exports.error = function(req, res, descripcion, status, tecnico) {
    console.error( `[response error] - ${tecnico}` )
    res.status(status || 500).send({ error:descripcion, body:'' })
}