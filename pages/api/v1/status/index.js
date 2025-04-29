function status(request, response) {
  response.status(200).json({ chave: "Olá pessoas" });
}

export default status;
