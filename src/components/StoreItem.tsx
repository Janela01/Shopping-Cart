import { useContext } from "react";
import { Button, Card } from "react-bootstrap"
import { ShoppingCartContext, useShoppingCart } from "../context/shoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency"

export type StoreItemProps = {
      id?: number,
      name: string,
      price: number,
      imgUrl?: string
}
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
      const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
      const quantity = getItemQuantity(id!);
      return <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} style={{ maxHeight: "200px", width: "auto", margin: "0 auto" }} />
            <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span>{name}</span>
                        <span className="ms-4 text-muted fs-6">{formatCurrency(price)}</span>
                  </Card.Title>
                  <div className="mt-auto">
                        {quantity === 0 ? (
                              <Button onClick={() => increaseCartQuantity(id!)} className="w-100">Add To Cart</Button>
                        ) : (
                              <div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem" }}>
                                    <div className="d-flex align-items-center " style={{ gap: "0.5rem" }}>
                                          <Button onClick={() => decreaseCartQuantity(id!)}>-</Button>
                                          <div className="fs-5"><span className="fs-4">{quantity}</span> in cart</div>
                                          <Button onClick={() => increaseCartQuantity(id!)}>+</Button>
                                    </div>
                                    <Button variant="danger" size="sm" onClick={() => removeFromCart(id!)}>Remove</Button>
                              </div>
                        )}
                  </div>
            </Card.Body>
      </Card>
}