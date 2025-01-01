import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary/70 text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="assets/logo.png" width={"160"} />

            <p className="text-sm">Eleito o melhor do mercado desde 2018.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Entre em contato</h3>
            <p className="text-sm">123 Burger Street</p>
            <p className="text-sm">Foodville, FV 12345</p>
            <p className="text-sm">Phone: (31) 982033698</p>
            <p className="text-sm">Email: hiagodeveloperfr@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Nos acompanhe</h3>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" className="hover:text-accent">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="https://instagram.com" className="hover:text-accent">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="https://twitter.com" className="hover:text-accent">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-50 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Best Burger. TOdos os direitos
            reservados.
          </p>
          <p className="mt-2">
            Website developed by{" "}
            <Link
              to="https://hiagoferreira.netlify.app/"
              className="underline hover:text-accent"
            >
              Hiago Ferreira.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
