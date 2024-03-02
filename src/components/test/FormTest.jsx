'use client'
export default function FormTest() {
  return (
    <form>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" />
      <label htmlFor="descripcion">Descripcion</label>
      <input type="text" id="descripcion" name="descripcion" />
    </form>
  )
}
