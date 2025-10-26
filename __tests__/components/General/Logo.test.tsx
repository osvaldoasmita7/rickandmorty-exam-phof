import { Logo } from "@/app/components";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // Retorna un elemento <img> simple con las propiedades recibidas
    return <img {...props} />;
  },
}));
describe("first", () => {
  // Limpia los mocks después de cada test para que no interfieran
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("se renderiza correctamente con los favoritos", () => {
    render(<Logo />);
    // Utiliza un `getByText` para buscar el elemento que contiene el texto "Algo".
    const [element] = screen.getAllByRole("img");

    // Asegúrate de que el elemento se encuentre en el documento.
    expect(element).toBeInTheDocument();
  });
});
