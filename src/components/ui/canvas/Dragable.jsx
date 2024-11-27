import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image, Group, Transformer } from 'react-konva';

const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const image = new window.Image();
        image.src = src;
        image.onload = () => resolve(image);
        image.onerror = reject;
    });
};

const DraggableImage = ({ shapeProps, isSelected, onSelect, onChange }) => {
    const shapeRef = React.useRef();
    const trRef = React.useRef();

    React.useEffect(() => {
        if (isSelected) {
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <Group>
            <Image
                onClick={onSelect}
                onTap={onSelect}
                ref={shapeRef}
                {...shapeProps}
                draggable
                onDragEnd={(e) => {
                    onChange({
                        ...shapeProps,
                        x: e.target.x(),
                        y: e.target.y(),
                    });
                }}
                onTransformEnd={(e) => {
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();

                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                        ...shapeProps,
                        x: node.x(),
                        y: node.y(),
                        width: node.width() * scaleX,
                        height: node.height() * scaleY,
                    });
                }}
            />
            {isSelected && (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </Group>
    );
};

const WarehouseMapEditor = () => {
    const [shapes, setShapes] = useState([]);
    const [selectedId, selectShape] = useState(null);
    const [tool, setTool] = useState(null);
    const [images, setImages] = useState({});

    useEffect(() => {
        const loadImages = async () => {
            const wallImage = await loadImage('path/to/wall.svg');
            const zoneImage = await loadImage('path/to/zone.svg');
            const routeImage = await loadImage('path/to/route.svg');
            const obstacleImage = await loadImage('path/to/obstacle.svg');
            const beaconImage = await loadImage('path/to/beacon.svg');
            const wifiImage = await loadImage('path/to/wifi.svg');
            const parkingSlotImage = await loadImage('path/to/parkingSlot.svg');
            const chargingSlotImage = await loadImage('path/to/chargingSlot.svg');
            const feedingSlotImage = await loadImage('path/to/feedingSlot.svg');
            const conveyorSlotImage = await loadImage('path/to/conveyorSlot.svg');
            const storageSlotImage = await loadImage('path/to/storageSlot.svg');

            setImages({
                wall: wallImage,
                zone: zoneImage,
                route: routeImage,
                obstacle: obstacleImage,
                beacon: beaconImage,
                wifi: wifiImage,
                parkingSlot: parkingSlotImage,
                chargingSlot: chargingSlotImage,
                feedingSlot: feedingSlotImage,
                conveyorSlot: conveyorSlotImage,
                storageSlot: storageSlotImage,
            });
        };

        loadImages();
    }, []);

    const addShape = (type) => {
        const newShape = {
            id: Math.random().toString(36).substr(2, 9),
            type,
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            image: images[type],
        };
        setShapes([...shapes, newShape]);
    };

    const handleStageClick = (e) => {
        if (tool) {
            addShape(tool);
            setTool(null);
        }
    };

    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            selectShape(null);
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <button onClick={() => setTool('wall')}>Стена</button>
                    <button onClick={() => setTool('zone')}>Зона</button>
                    <button onClick={() => setTool('route')}>Маршрут</button>
                    <button onClick={() => setTool('obstacle')}>Препятствие</button>
                    <button onClick={() => setTool('beacon')}>Маяк Локализации</button>
                    <button onClick={() => setTool('wifi')}>WiFi Точка Доступа</button>
                    <button onClick={() => setTool('parkingSlot')}>Слот Парковки</button>
                    <button onClick={() => setTool('chargingSlot')}>Слот Зарядки</button>
                    <button onClick={() => setTool('feedingSlot')}>Слот Подачи</button>
                    <button onClick={() => setTool('conveyorSlot')}>Слот Конвейер</button>
                    <button onClick={() => setTool('storageSlot')}>Слот Хранения</button>
                </div>
                <div>
                    <button>Удалить объект</button>
                    <button>Отменить</button>
                    <button>Повторить</button>
                    <button>Сохранить</button>
                </div>
            </div>
            <Stage width={window.innerWidth} height={window.innerHeight - 100} onMouseDown={checkDeselect} onTouchStart={checkDeselect} onClick={handleStageClick}>
                <Layer>
                    {shapes.map((shape) => (
                        <DraggableImage
                            key={shape.id}
                            shapeProps={shape}
                            isSelected={shape.id === selectedId}
                            onSelect={() => {
                                selectShape(shape.id);
                            }}
                            onChange={(newAttrs) => {
                                const rects = shapes.slice();
                                rects[rects.findIndex((r) => r.id === shape.id)] = newAttrs;
                                setShapes(rects);
                            }}
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    );
};

export default WarehouseMapEditor;